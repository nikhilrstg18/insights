export class DBWidget {
  constructor(
    public title: string = '',
    public iconShape: string = '',
    public captionTemplate: string = '',
    public threshold: number = 0,
    public count: number = 0,
    public csat: number = 0,
    public caption: string = ''
  ) {
    this.caption = this.captionTemplate.replace(
      '{0}',
      this.threshold.toString()
    );
  }
}
