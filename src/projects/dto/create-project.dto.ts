export class CreateProjectDto {
  readonly name: string;
  readonly id: string;
  readonly tasksIds: string[];
  readonly parentSpaceId: string;
  readonly description: string;
}
