export class CreateTaskDto {
  readonly name: string;
  readonly id: string;
  readonly status: boolean;
  readonly subtasksIds: string[];
  readonly parentId: string;
  readonly comment: string;
}
