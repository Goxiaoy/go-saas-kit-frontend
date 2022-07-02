import type { UserInfo } from '@kit/core';
/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: UserInfo } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser,
  };
}
