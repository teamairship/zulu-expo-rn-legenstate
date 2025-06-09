import { observable } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

export interface Project {
  id: string;
  name: string;
}

export interface ProjectStore {
  projects: Project[];
  addProject: ({ name }: Pick<Project, 'name'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: ({ id }: Pick<Project, 'id'>) => void;
}

export const projectStore$ = observable<ProjectStore>({
  projects: [
    {
      id: '123',
      name: 'Project 1',
    },
    {
      id: '234',
      name: 'Project 2',
    },
  ],
  addProject: ({ name }) => {
    const project: Project = {
      id: crypto.randomUUID(),
      name,
    };
    projectStore$.projects.push(project);
  },
  updateProject: (project) => {
    const index = projectStore$.projects.findIndex(
      (a) => a.id.get() === project.id
    );
    if (index !== -1) {
      projectStore$.projects[index].assign(project);
    }
  },
  deleteProject: ({ id }) => {
    const index = projectStore$.projects.findIndex((a) => a.id.get() === id);
    if (index !== -1) {
      projectStore$.projects.splice(index, 1);
    }
  },
});

syncObservable(projectStore$, {
  persist: {
    name: 'projectStore',
    plugin: ObservablePersistLocalStorage,
  },
});
