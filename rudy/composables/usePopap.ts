export interface IPopAp {
  buttonTrigger: boolean;
  timerTrigger: boolean;
}
export const usePopap = () =>
  useState<IPopAp>("popap", () => {
    return {
      buttonTrigger: false,
      timerTrigger: false,
    };
  });
