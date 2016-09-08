<template>
  <div>
    <h1>This is my component!</h1>
   <!-- <slot>
      如果没有分发内容则显示我。
    </slot>-->

    <slot name="one"></slot>
    <slot></slot>
    <slot name="two"></slot>
  </div>
</template>
