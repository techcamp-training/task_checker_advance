import { defineStore } from 'pinia'
import api from '../api/axios'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);
  const filteredTasks = ref([]);

  async function fetchAllTasks () {
    try{
      const response = await api.get('/tasks')
      tasks.value = response.data;

      // 読み込み時に、this.filteredTasksも全タスクを取得しておく。
      // この記述をすることでフィルタがかかっていない状態で全タスクを選択できる。
      filteredTasks.value = tasks.value;
    }catch(error){
      console.log('タスクデータの取得ができませんでした', error);
    }
  }

  // ジャンルデータ変更に伴うタスクのフィルタリング
  async function filterTasks(genreId) {
    //取得したselectedGenreIdとtaskのidが同一だったらtasks.valueのデータを更新
    if(!genreId) {
      filteredTasks.value = [...tasks.value];
    } else {
      filteredTasks.value = tasks.value.filter(task => genreId === task.genreId)
    }
  }

  return { tasks, filteredTasks, fetchAllTasks, filterTasks }
})
 