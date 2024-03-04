import {
  PartialState,
  NavigationState,
  createNavigationContainerRef,
} from "@react-navigation/native";

export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
};
export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function replace(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.replace(name as never, params as never);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(params = { index: 0, routes: [] as any }) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params);
  }
}
