export default class VerifcCode {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  backgroundColorMin: number;
  backgroundColorMax: number;
  fontSizeMin: number;
  fontSizeMax: number;
  colorMin: number;
  colorMax: number;
  lineColorMin: number;
  lineColorMax: number;
  dotColorMin: number;
  dotColorMax: number;
  contentWidth: number;
  contentHeight: number;
  identifyCode: string;
  identifyCodes = '';
  constructor(el: string, opt: any) {
    const canvas = document.getElementById(el) as HTMLCanvasElement;
    if (!canvas) throw new Error('无canvas');
    this.canvas = canvas;
    this.canvas.width = 100;
    this.canvas.height = 40;
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) throw new Error('没有获取到上下文');
    this.ctx = ctx;
    this.backgroundColorMin = opt.backgroundColorMin || 255;
    this.backgroundColorMax = opt.backgroundColorMax || 255;
    this.fontSizeMin = opt.fontSizeMin || 25;
    this.fontSizeMax = opt.fontSizeMax || 30;
    this.colorMin = opt.colorMin || 0;
    this.colorMax = opt.colorMax || 160;
    this.lineColorMin = opt.lineColorMin || 100;
    this.lineColorMax = opt.lineColorMax || 255;
    this.dotColorMin = opt.dotColorMin || 0;
    this.dotColorMax = opt.dotColorMax || 255;
    this.contentWidth = opt.contentWidth || 112;
    this.contentHeight = opt.contentHeight || 31;
    this.identifyCodes = opt.identifyCodes || '1234567890';
    this.identifyCode = '';
    this.makeCode(4);
    this.drawPic();
  }
  // 生成一个随机数
  randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // 生成一个随机的颜色
  randomColor(min: number, max: number) {
    const r = this.randomNum(min, max);
    const g = this.randomNum(min, max);
    const b = this.randomNum(min, max);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  // 绘制线条绘制点
  drawPic() {
    this.ctx.textBaseline = 'bottom';
    // 绘制背景
    this.ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax);
    this.ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
    // 绘制文字
    for (let i = 0; i < this.identifyCode.length; i++) {
      this.drawText(this.identifyCode[i], i);
    }
    this.drawLine();
    this.drawDot();
  }
  drawText(txt: string, i: number) {
    this.ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
    this.ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei';
    const x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1));
    const y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
    const deg = this.randomNum(-45, 45);
    // 修改坐标原点和旋转角度
    this.ctx.translate(x, y);
    this.ctx.rotate((deg * Math.PI) / 180);
    this.ctx.fillText(txt, 0, 0);
    // 恢复坐标原点和旋转角度
    this.ctx.rotate((-deg * Math.PI) / 180);
    this.ctx.translate(-x, -y);
  }
  drawLine() {
    // 绘制干扰线
    for (let i = 0; i < 5; i++) {
      this.ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax);
      this.ctx.beginPath();
      this.ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
      this.ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
      this.ctx.stroke();
    }
  }
  drawDot() {
    // 绘制干扰点
    for (let i = 0; i < 80; i++) {
      this.ctx.fillStyle = this.randomColor(0, 255);
      this.ctx.beginPath();
      this.ctx.arc(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight),
        1,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
    }
  }
  makeCode(l: number) {
    this.identifyCode = '';
    return new Promise((resove, reject) => {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
      if (this.identifyCode) {
        resove(this.identifyCode);
      } else {
        reject();
      }
    });
  }
  deepClone(obj1: object, obj2: object): object {
    return Object.assign(obj1, obj2);
  }
}
