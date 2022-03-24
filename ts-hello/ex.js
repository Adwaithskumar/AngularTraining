"use strict";
export const __esModule = true;
import { LikeComponent } from "./like.component";
var component = new LikeComponent(10, true);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, ", isSelected: ").concat(component.isSelected));
