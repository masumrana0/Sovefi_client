export interface ILayoutMenuChildrenItem {
  icon?: React.ReactNode;
  label: string;
  route: string;
}
export interface ILayoutMenuItem {
  icon: React.ReactNode;
  label: string;
  route?: string;
  children?: ILayoutMenuChildrenItem[];
}
