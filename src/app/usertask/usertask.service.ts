import { Injectable } from "@angular/core";
import { type newTask } from "./tasks/task.model";

@Injectable({providedIn: 'root'})
export class TaskService{
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          date: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          date: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          date: '2024-06-15',
        },
      ];

      constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }

    getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId)
    }

    addTask(taskData: newTask, userId: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            date: taskData.date
          })
        this.saveTasks();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}