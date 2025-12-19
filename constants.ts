
import { Translations } from './types';

export const TRANSLATIONS: Record<'EN' | 'ZH', Translations> = {
  EN: {
    title: "MiMo's Free API",
    subtitle: "Didn't need to log in",
    pinlessCard: "MIMO-V2-Flash: PINless",
    pinRequiredCard: "MiMo=V2 Flash: Only for Oscar&Henry",
    developersCard: "Developers' camp",
    modalTitle: "Need PIN",
    pinPlaceholder: "Enter PIN...",
    submit: "Enter",
    errorMessage: "Pay ¥2.9 to wxid:adlevien_fans",
    successMessage: "This site is only for demonstration",
    toggleLang: "中文"
  },
  ZH: {
    title: "MiMo 免费 API",
    subtitle: "无需登录",
    pinlessCard: "MIMO-V2-Flash: 无需 PIN 码",
    pinRequiredCard: "MiMo=V2 Flash: 仅限 Oscar & Henry",
    developersCard: "开发者营地",
    modalTitle: "需要 PIN 码",
    pinPlaceholder: "请输入 PIN 码...",
    submit: "进入",
    errorMessage: "请支付 2.9 元到微信号: adlevien_fans",
    successMessage: "本网站仅作为演示",
    toggleLang: "English"
  }
};

export const VALID_PINS = ["Oscar94518", "0816mifan"];
