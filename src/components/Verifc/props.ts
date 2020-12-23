import { Prop } from 'vue';
export const props = {
  fontSizeMin: {
    type: Number,
    default: 25,
  },
  fontSizeMax: {
    type: Number,
    default: 30,
  },
  backgroundColorMin: {
    type: Number,
    default: 255,
  },
  backgroundColorMax: {
    type: Number,
    default: 255,
  },
  colorMin: {
    type: Number,
    default: 0,
  },
  colorMax: {
    type: Number,
    default: 160,
  },
  lineColorMin: {
    type: Number,
    default: 100,
  },
  lineColorMax: {
    type: Number,
    default: 255,
  },
  dotColorMin: {
    type: Number,
    default: 0,
  },
  dotColorMax: {
    type: Number,
    default: 255,
  },
  contentWidth: {
    type: Number,
    default: 112,
  },
  contentHeight: {
    type: Number,
    default: 31,
  },
  authCodeKey: {
    type: String,
    default: '1234567890',
  } as Prop<string>,
};
