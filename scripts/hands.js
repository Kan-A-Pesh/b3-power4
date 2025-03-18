class HandTracker {
  constructor() {
    this.video = null;

    this.handsElement = [];
    this.physicalHands = [];

    this.onHandsMoveCallback = null;
  }

  preload() {
    this.handPose = ml5.handPose();
  }

  setup() {
    createCanvas(640, 480);

    this.video = createCapture(VIDEO);
    this.video.size(640, 480);
    this.video.hide();

    this.handPose.detectStart(this.video, this.gotHands.bind(this));
  }

  draw() {
    // Remove hand elements that are no longer in the physical hands
    while (this.handsElement.length > this.physicalHands.length) {
      this.handsElement[this.handsElement.length - 1].remove();
      this.handsElement.pop();
    }

    // Add new hand elements
    while (this.handsElement.length < this.physicalHands.length) {
      const handElement = document.createElement("div");
      handElement.classList.add("hand");
      this.handsElement.push(handElement);
      document.body.appendChild(handElement);
    }

    this.handsElement.forEach((hand, index) => {
      hand.style.left = `${this.physicalHands[index].position.x}px`;
      hand.style.top = `${this.physicalHands[index].position.y}px`;

      if (this.physicalHands[index].isContact) {
        hand.classList.add("active");
      } else {
        hand.classList.remove("active");
      }
    });
  }

  gotHands(hands) {
    // image(this.video, 0, 0, width, height);
    background(255);

    this.physicalHands = hands.map((hand) => {
      // Filter and draw only thumb and index finger tips
      const keypoints = hand.keypoints;
      const fingertips = keypoints.filter(
        (keypoint) =>
          keypoint.name === "index_finger_tip" || keypoint.name === "thumb_tip"
      );

      // Show keypoints
      // fingertips.forEach((keypoint) => {
      //   ellipse(keypoint.x, keypoint.y, 10, 10);
      // });

      // Calculate distance between thumb and index finger
      const thumb =
        keypoints.find((k) => k.name === "thumb_tip") || keypoints[4];
      const index =
        keypoints.find((k) => k.name === "index_finger_tip") || keypoints[8];

      // Calculate distance using reduce
      const distanceSq = [
        { coord: "x", diff: index.x - thumb.x },
        { coord: "y", diff: index.y - thumb.y },
      ].reduce((sum, axis) => sum + axis.diff ** 2, 0);

      const is_contact = distanceSq < MAX_TOUCH_DISTANCE_SQ;

      const worldCenter = {
        x: (thumb.x / 640) * window.innerWidth,
        y: (thumb.y / 480) * window.innerHeight,
      };

      if (REVERSE_X_AXIS) {
        worldCenter.x = window.innerWidth - worldCenter.x;
      }

      return {
        hand,
        distanceSq,
        position: worldCenter,
        isContact: is_contact,
      };
    });

    this.onHandsMoveCallback && this.onHandsMoveCallback(this.physicalHands);
  }

  onHandsMove(callback) {
    this.onHandsMoveCallback = callback;
  }
}

const handTracker = new HandTracker();

function preload() {
  handTracker.preload();
}

function setup() {
  handTracker.setup();
}

function update() {
  handTracker.draw();
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
