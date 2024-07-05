import Tasks from "@/components/Tasks/Tasks";

async function fetchTask(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    console.log(data)
    return data
}


export default async function TasksPage(){
    const tasks = await fetchTask();

    return(
        <div className=""> 
            <Tasks tasks={tasks} />
        </div>
    )
}