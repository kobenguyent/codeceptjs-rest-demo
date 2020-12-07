/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type ExpectWrapper = import('./ExpectWrapper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, ExpectWrapper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
