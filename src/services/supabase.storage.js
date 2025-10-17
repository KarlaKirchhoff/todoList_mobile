import { supabase } from "../utils/supabase";

export async function getTasks() {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('due_date', { ascending: true });

    if (error) {
        console.error('Erro ao buscar tarefas:', error);
    }

    return data
}

export async function saveTasks(task){
    const { error } = await supabase
    .from('tasks')
    .insert ([{
        title: task.title,
        due_date: task.due_date
    }])

    if (error) {
        console.error('Erro ao salvar tarefas:', error);
    }
}