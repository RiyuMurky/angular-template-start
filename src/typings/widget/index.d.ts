interface WidgetData {

}

interface BoxWidgetData extends WidgetData {
  instanceName?: string;
}

interface SmallBoxData extends BoxWidgetData {
  instanceName?: string;
  bgColorClass: string;
  headerText:string;
  descriptionText:string;
  iconClass:string;
  routerLink:string;
  infoText:string;
  infoIconClass:string;
}

interface InfoBoxData extends BoxWidgetData {
  instanceName?: string;
  bgColorClass: string;
  labelColorClass: string;
  labelIconClass: string;
  contentText: string;
  contentNumber: number;
  progress: boolean;
  progressValue: number;
  progressDesc: string;
}

interface ObservableMap<T> {
    [key: string]: T;
}

interface Breadcrumb {
  label: string;
  params?: any;
  url: string;
}
