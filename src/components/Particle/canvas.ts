// import scale from './scale';
export interface Optinter {
  position?: string;
  width: number;
  height: number;
}
export interface Config {
  color: string;
  radius: number;
  distance: number;
  width: number;
  height: number;
  count: number;
  zIndex: number | string;
  rate: number;
  resize: boolean;
  line: boolean;
  bounce: boolean;
}

const scale = (canvasList: Array<any>, opt: Optinter) => {
  const ratio = window.devicePixelRatio || 1;
  let ctx = null;
  canvasList.forEach((canvas) => {
    ctx = canvas.getContext('2d');
    canvas.style.position = opt.position;
    canvas.style.width = opt.width + 'px';
    canvas.style.height = opt.height + 'px';
    canvas.width = opt.width * ratio;
    canvas.height = opt.height * ratio;
    ctx.scale(ratio, ratio);
  });

  return canvasList;
};
export class Particle {
  element: HTMLElement;
  color: string;
  width: number;
  height: number;
  distance: number;
  radius: number;
  count: number;
  zIndex: number | string;
  rate: number;
  resize: boolean;
  line: boolean;
  bounce: boolean;
  points: Array<any> = [];
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor(element: string, config: any) {
    const el = document.querySelector(element) as HTMLElement;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('上下文为空');
    if (!el) throw new Error('没有父元素');
    this.element = el;
    this.color = config.color || '#0288d1';
    this.width = this.element.clientWidth;
    this.height = this.element.clientHeight;
    this.distance = config.distance || this.width / 10;
    this.radius = config.radius || 2;
    this.points = [];
    this.count = config.count || 100;
    this.zIndex = config.zIndex || 1;
    this.rate = config.rate || this.width / 10000;
    this.resize = config.resize || true;
    this.line = config.line || true;
    this.bounce = config.bounce || false;
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.zIndex = this.zIndex as string;
    scale([this.canvas], {
      width: this.width,
      height: this.height,
    });
    this.element.appendChild(this.canvas);
    for (let i = 0; i < this.count; i++) {
      this.points.push(this.getPoint(this.radius));
    }

    if (this.resize) {
      window.onresize = () => {
        this.width = this.element.clientWidth;
        this.height = this.element.clientHeight;
        this.distance = config.distance || this.width / 10;
        this.rate = config.rate || this.width / 10000;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        scale([this.canvas], {
          width: this.width,
          height: this.height,
        });
      };
    }
  }

  getPoint(radius: number) {
    const x = Math.ceil(Math.random() * this.width),
      y = Math.ceil(Math.random() * this.height),
      r = +(Math.random() * radius).toFixed(4),
      rateX = +(Math.random() * 2 - 1).toFixed(4),
      rateY = +(Math.random() * 2 - 1).toFixed(4);

    return { x, y, r, rateX, rateY };
  }
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawPoints();
    if (this.line) {
      this.drawLines();
    }
    window.requestAnimationFrame(this.draw.bind(this));
  }
  drawPoints() {
    this.points.forEach((item, i) => {
      this.ctx.beginPath();
      this.ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2, false);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      if (this.bounce) {
        if (
          item.x >= item.r &&
          item.x <= this.width - item.r &&
          item.y >= item.r &&
          item.y <= this.height - item.r
        ) {
          item.x += item.rateX * this.rate;
          item.y += item.rateY * this.rate;
        } else {
          if (item.x < item.r || item.x > this.width - item.r) {
            item.rateX = -item.rateX;
          }
          if (item.y < item.r || item.y > this.height - item.r) {
            item.rateY = -item.rateY;
          }
          item.x += item.rateX * this.rate;
          item.y += item.rateY * this.rate;
        }
      } else {
        if (
          item.x >= 0 - item.r &&
          item.x <= this.width + item.r &&
          item.y >= 0 - item.r &&
          item.y <= this.height + item.r
        ) {
          item.x += item.rateX * this.rate;
          item.y += item.rateY * this.rate;
        } else {
          this.points.splice(i, 1);
          this.points.push(this.getPoint(this.radius));
        }
      }
    });
  }

  dis(x1: number, y1: number, x2: number, y2: number) {
    const disX = Math.abs(x1 - x2),
      disY = Math.abs(y1 - y2);

    return Math.sqrt(disX * disX + disY * disY);
  }

  drawLines() {
    const len = this.points.length;
    //对圆心坐标进行两两判断
    for (let i = 0; i < len; i++) {
      for (let j = len - 1; j >= 0; j--) {
        const x1 = this.points[i].x,
          y1 = this.points[i].y,
          x2 = this.points[j].x,
          y2 = this.points[j].y,
          disPoint = this.dis(x1, y1, x2, y2);

        if (disPoint <= this.distance) {
          this.ctx.beginPath();
          this.ctx.moveTo(x1, y1);
          this.ctx.lineTo(x2, y2);
          this.ctx.strokeStyle = this.color;
          //两点之间距离越大，线越细，反之亦然
          this.ctx.lineWidth = 1 - disPoint / this.distance;
          this.ctx.stroke();
        }
      }
    }
  }
}
