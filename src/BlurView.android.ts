import { ContentView, View } from "@nativescript/core";
import { clipToBoundsProperty } from "@nativescript/core/ui/layouts/layout-base";

export class CornerView extends ContentView {
  [clipToBoundsProperty.setNative](value: boolean) {
    // ignore
  }

  createNativeView() {
    // @ts-ignore
    return new org.nativescript.CornerView(this._context, 1000);
  }
}

export class BlurView extends ContentView {
  createNativeView(): Object {
    return new eightbitlab.com.blurview.BlurView(this._context);
  }

  [clipToBoundsProperty.getDefault](): boolean {
    return true;
  }

  initNativeView(): void {
    const blurView = this.nativeView as eightbitlab.com.blurview.BlurView;
    const radius = 25;

    const decorView = this._context
      .getWindow()
      .getDecorView() as android.view.ViewGroup;
    // Optional:
    // Set drawable to draw in the beginning of each blurred frame.
    // Can be used in case your layout has a lot of transparent space and your content
    // gets a too low alpha value after blur is applied.
    const windowBackground = decorView.getBackground();

    blurView
      .setupWith(
        decorView,
        new eightbitlab.com.blurview.RenderScriptBlur(this._context)
      ) // or RenderEffectBlur
      .setFrameClearDrawable(windowBackground) // Optional
      .setBlurRadius(radius);
  }
}
