import { Observable, observable } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

export interface Activity {
  id: string;
  name: string;
  project_key: string;
}

export interface ActivityStore {
  activities: Activity[];
  addActivity: ({
    name,
    project_key,
  }: Pick<Activity, 'name' | 'project_key'>) => void;
  updateActivity: (activty: Activity) => void;
  deleteActivity: ({ id }: Pick<Activity, 'id'>) => void;

}

export const activityStore$ = observable<ActivityStore>({
  activities: [
    {
      id: '345sdf',
      name: 'Activity 1 for Project 1',
      project_key: '123',
    },
    {
      id: '334653',
      name: 'Activity 2 for Project 1',
      project_key: '123',
    },
    {
      id: '2345345',
      name: 'Activity 3 for Project 2',
      project_key: '234',
    },
    {
      id: '2dsfg',
      name: 'Activity 4 for Project 2',
      project_key: '234',
    },
  ],
  addActivity: ({ name, project_key }) => {
    const activity: Activity = {
      id: crypto.randomUUID(),
      name,
      project_key,
    };
    activityStore$.activities.push(activity);
  },
  updateActivity: (activity) => {
    const index = activityStore$.activities.findIndex(
      (a) => a.id.get() === activity.id
    );
    if (index !== -1) {
      activityStore$.activities[index].assign(activity);
    }
  },
  deleteActivity: ({ id }) => {
    const index = activityStore$.activities.findIndex((a) => a.id.get() === id);
    if (index !== -1) {
      activityStore$.activities.splice(index, 1);
    }
  },
});

syncObservable(activityStore$, {
  persist: {
    name: 'activityStore',
    plugin: ObservablePersistLocalStorage,
  },
});
