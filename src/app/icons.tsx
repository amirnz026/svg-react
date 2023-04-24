import { SVGProps } from "react";

export const ShoppingBagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <path
      fill={props.fill}
      d="M10.77 36.288c-.684 0-1.26-.24-1.73-.718-.471-.478-.707-1.065-.707-1.76V15.037c0-.694.236-1.28.706-1.759a2.332 2.332 0 0 1 1.73-.718h3.526v-.978c0-1.62.553-2.991 1.658-4.115S18.407 5.78 20 5.78c1.593 0 2.942.562 4.047 1.686 1.105 1.124 1.658 2.496 1.658 4.115v.978h3.526c.682 0 1.26.24 1.73.718.47.479.706 1.065.706 1.76V33.81c0 .694-.236 1.28-.706 1.76a2.333 2.333 0 0 1-1.73.717H10.769Zm0-1.434h18.46c.257 0 .492-.109.706-.326.213-.217.32-.456.32-.717V15.036c0-.26-.107-.5-.32-.717-.214-.217-.449-.326-.705-.326h-3.526v4.368a.698.698 0 0 1-.71.717.667.667 0 0 1-.502-.205.708.708 0 0 1-.198-.512v-4.368h-8.59v4.368a.698.698 0 0 1-.71.717.667.667 0 0 1-.502-.205.708.708 0 0 1-.198-.512v-4.368h-3.526c-.256 0-.491.109-.705.326-.214.218-.32.457-.32.717v18.775c0 .26.106.5.32.717.214.217.449.326.705.326Zm4.935-22.295h8.59v-.978c0-1.229-.414-2.264-1.241-3.105-.827-.842-1.845-1.262-3.054-1.262-1.209 0-2.227.42-3.054 1.262-.827.84-1.241 1.876-1.241 3.105v.978Z"
    />
  </svg>
);