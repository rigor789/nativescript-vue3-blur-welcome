/// <reference path="android-declarations.d.ts"/>

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurAlgorithm {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurAlgorithm>;
				/**
				 * Constructs a new instance of the eightbitlab.com.blurview.BlurAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
					destroy(): void;
					canModifyBitmap(): boolean;
					getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
					scaleFactor(): number;
					render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
				});
				public constructor();
				public destroy(): void;
				public scaleFactor(): number;
				public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				public render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public canModifyBitmap(): boolean;
			}
		}

		
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurController extends eightbitlab.com.blurview.BlurViewFacade {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurController>;
				/**
				 * Constructs a new instance of the eightbitlab.com.blurview.BlurController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					draw(param0: globalAndroid.graphics.Canvas): boolean;
					updateBlurViewSize(): void;
					destroy(): void;
					setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
					setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
					setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				});
				public constructor();
				public static DEFAULT_BLUR_RADIUS: number;
				public static DEFAULT_SCALE_FACTOR: number;
				public destroy(): void;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
				public draw(param0: globalAndroid.graphics.Canvas): boolean;
				public updateBlurViewSize(): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurView {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurView>;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setupWith(param0: globalAndroid.view.ViewGroup): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public constructor(param0: globalAndroid.content.Context);
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public onDetachedFromWindow(): void;
				public setupWith(param0: globalAndroid.view.ViewGroup, param1: eightbitlab.com.blurview.BlurAlgorithm): eightbitlab.com.blurview.BlurViewFacade;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurViewCanvas {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurViewCanvas>;
				public constructor(param0: globalAndroid.graphics.Bitmap);
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurViewFacade {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurViewFacade>;
				/**
				 * Constructs a new instance of the eightbitlab.com.blurview.BlurViewFacade interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
					setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
					setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				});
				public constructor();
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BuildConfig {
				public static class: java.lang.Class<eightbitlab.com.blurview.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class NoOpController extends eightbitlab.com.blurview.BlurController {
				public static class: java.lang.Class<eightbitlab.com.blurview.NoOpController>;
				public destroy(): void;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
				public draw(param0: globalAndroid.graphics.Canvas): boolean;
				public updateBlurViewSize(): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class PreDrawBlurController extends eightbitlab.com.blurview.BlurController {
				public static class: java.lang.Class<eightbitlab.com.blurview.PreDrawBlurController>;
				public destroy(): void;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
				public draw(param0: globalAndroid.graphics.Canvas): boolean;
				public updateBlurViewSize(): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class RenderEffectBlur extends eightbitlab.com.blurview.BlurAlgorithm {
				public static class: java.lang.Class<eightbitlab.com.blurview.RenderEffectBlur>;
				public fallbackAlgorithm: eightbitlab.com.blurview.BlurAlgorithm;
				public destroy(): void;
				public scaleFactor(): number;
				public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				public render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public constructor();
				public canModifyBitmap(): boolean;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class RenderScriptBlur extends eightbitlab.com.blurview.BlurAlgorithm {
				public static class: java.lang.Class<eightbitlab.com.blurview.RenderScriptBlur>;
				public destroy(): void;
				public scaleFactor(): number;
				public constructor(param0: globalAndroid.content.Context);
				public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				public render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public canModifyBitmap(): boolean;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class SizeScaler {
				public static class: java.lang.Class<eightbitlab.com.blurview.SizeScaler>;
				public constructor(param0: number);
			}
			export module SizeScaler {
				export class Size {
					public static class: java.lang.Class<eightbitlab.com.blurview.SizeScaler.Size>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

//Generics information:

