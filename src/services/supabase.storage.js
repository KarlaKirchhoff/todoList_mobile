import { supabase } from "../utils/supabase";

const db = 'taks'

export async function getTasks() {
    const { data, error } = await supabase
        .from('taks')
        .select('*')
        .order('due_date', { ascending: true });

    if (error) {
        console.error('Erro ao buscar tarefas:', error);
    }

    return data
}

export async function saveTasks(task){
    const { error } = await supabase
    .from('taks')
    .insert ([{
        title: task.title,
        due_date: task.dueDate
    }])

    if (error) {
        console.error('Erro ao salvar tarefas:', error);
    }
}