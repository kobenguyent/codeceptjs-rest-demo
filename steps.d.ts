/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, JSONResponse, ApiDataFactory {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse>, WithTranslation<ApiDataFactory> {}
  namespace Translation {
    interface Actions {}
  }
}
