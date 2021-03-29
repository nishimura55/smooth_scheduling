class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks.pluck(:name)
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task
    else
      render json: { error_message: task.errors.full_messages }
    end
  end

  private

  def task_params
    params.require(:task).permit(:name)
  end
end
