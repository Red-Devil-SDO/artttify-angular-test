export type TIcons = keyof typeof IconNames;

export const IconNames = {
  efesGe: "icon-efes-ge",
  mark: "icon-mark",
  calendar: "icon-calendar",
  camera: "icon-camera",
  heart: "icon-heart",
  eye: "icon-eye",
  eyeDisabled: "icon-eye-disabled",
};

export type TIconNames = { [T in TIcons]: T };

export const IconKeys = Object.keys(IconNames).reduce(
  (reducer, key) => ({ ...reducer, [key]: key }),
  {},
) as TIconNames;
