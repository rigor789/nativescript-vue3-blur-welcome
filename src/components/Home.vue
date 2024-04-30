<script lang="ts" setup>
import { Color } from "@nativescript/core";

function makeGradientText(args: any) {
  const view = args.object.nativeTextViewProtected as android.widget.TextView;
  if (!view) {
    return;
  }
  applyGradient(view);
}

function applyGradient(view: android.widget.TextView) {
  const colors = Array.create("int", 2);
  colors[0] = new Color("#9333ea").android;
  colors[1] = new Color("#67e8f9").android;

  // const positions = Array.create("float", 2);
  // positions[0] = 0;
  // positions[1] = 1;

  const textShader = new android.graphics.LinearGradient(
    0,
    0,
    888, // this is a random-ish number picked to make the gradient look good...
    0,
    colors,
    null as any, // positions,
    android.graphics.LinearGradient.TileMode.MIRROR
  );

  view.getPaint().setShader(textShader);
  view.invalidate();
}

function log(message: string) {
  console.log(message);
}
</script>

<template>
  <Frame>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
      <GridLayout rows="*, auto, auto, *, auto">
        <Image rowSpan="5" src="~/assets/bg-1.jpg" stretch="aspectFill" />
        <ContentView rowSpan="5" class="bg-gradient-cover" />

        <Image
          row="1"
          src="~/assets/logo.png"
          stretch="aspectFit"
          class="w-[100]"
        />

        <StackLayout row="2" class="mt-8">
          <Label
            text="Build Something"
            class="text-4xl font-bold text-white text-center leading-none"
            textWrap="true"
          />
          <Label
            text="Awesome"
            @layoutChanged="makeGradientText"
            class="-mt-2 text-4xl font-bold text-center leading-none text-white"
          />

          <Label
            text="No, seriously! :)"
            class="text-sm font-bold text-white/60 text-center mt-4"
          />
        </StackLayout>

        <StackLayout row="4" class="px-8 pb-8 mt-4">
          <Label
            @tap="log('Sign up')"
            class="px-4 py-4 text-black bg-white text-center text-sm font-bold rounded-full"
          >
            Sign Up
          </Label>

          <CornerView class="mt-4">
            <BlurView>
              <Label
                @tap="log('Log In')"
                class="px-4 py-4 text-white text-center text-sm font-bold border-4 border-white rounded-full"
                horizontalAlignment="center"
              >
                Log In
              </Label>
            </BlurView>
          </CornerView>
        </StackLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
