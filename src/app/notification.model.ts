export class Notification {
  public category: string;
  public firstName: string;
  public lastName: string;
  public priority: string;

  constructor(
    category: string, 
    firstName: string, 
    lastName: string, 
    priority: string,
    ) {
    this.category = category;
    this.firstName = firstName;
    this.lastName = lastName;
    this.priority = priority;
  }
}
