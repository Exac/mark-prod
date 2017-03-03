/**
 * Created by Thomas on 2017-02-24.
 */
export class Race {
  constructor(
    public name: string,
    public timestamp: string,
    public start: string,
    public marks?: string[][], /** [["00:00:01", "lap"], ["00:00:05", "mark"], ["00:00:04", "lap"]] */
    public end?: string,
    public remarks?: string) {  }
}
