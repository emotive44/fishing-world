export const withPreventEvents = (e: React.MouseEvent, callback: any) => {
  e.stopPropagation();
  e.preventDefault();
  callback();
}
