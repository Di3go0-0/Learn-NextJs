"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Tasks({ tasks }) {
  const [visibleTasks, setVisibleTasks] = useState(tasks.slice(0, 10)); // Inicialmente mostrar 10 tareas
  const [hasMore, setHasMore] = useState(tasks.length > 10);
  const loaderRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && hasMore) {
        const newVisibleTasks = tasks.slice(0, visibleTasks.length + 10); // Cargar 10 tareas más
        setVisibleTasks(newVisibleTasks);
        setHasMore(newVisibleTasks.length < tasks.length);
      }
    });

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [visibleTasks, hasMore, tasks]);

  return (
  <div className="grid grid-cols-3 gap-2">
  {visibleTasks.map((task) => (
    <Link href={`/tasks/${task.id}`} key={task.id}>
      <li className="bg-slate-400 mb-2 p-4 rounded text-black flex justify-between cursor-pointer hover:bg-slate-500 hover:shadow-md transition duration-300 min-h-[150px]">
        <div>
          <h5 className="font-bold">
            {task.id}{task.title}
          </h5>
          <p className="text-slate-600">Completed : {task.completed ? "Yes" : "No"}</p>
        </div>
      </li>
    </Link>
  ))}
  {hasMore && <div ref={loaderRef} className="loading">Cargando más tareas...</div>}
</div>
  );
}


{/* <div>
      {tasks.map((task) => (
        <Link href={`/tasks/${task.id}`} key={task.id} className="block">
          <li className="bg-slate-400 mb-2 p-4 rounded text-black flex justify-between cursor-pointer hover:bg-slate-500 hover:shadow-lg transition duration-300">
            <div>
              <h5 className="font-bold">
                {task.id} Name : {task.title}
              </h5>
              <p className="text-slate-600">Completed : {task.completed ? "Yes" : "No"}</p>
            </div>
          </li>
        </Link>
      ))}
    </div> */}