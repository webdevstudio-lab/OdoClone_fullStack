export let navigate = (p0: string, p1: { replace: boolean }) => {};

export const setNavigate = (fn: any) => {
  navigate = fn;
};
