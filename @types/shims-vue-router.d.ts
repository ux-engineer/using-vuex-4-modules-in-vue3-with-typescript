export { };

declare module 'vue-router' {
  interface RouteMeta {
    isPublic?: boolean;
    isError?: boolean;
  }
}
