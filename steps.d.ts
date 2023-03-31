/// <reference types='codeceptjs' />
type steps_file = typeof import('./stepObjects/custom.steps');
type ExpectHelper = import('codeceptjs-expect');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, JSONResponse, ExpectHelper, ApiDataFactory {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse>, WithTranslation<ExpectHelper>, WithTranslation<ApiDataFactory> {}
  namespace Translation {
    interface Actions {}
  }
}
