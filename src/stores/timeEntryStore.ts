import { observable } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

export interface TimeEntry {
  id: string;
  redmine_key: string;
  project_id: string;
  activity_id: string;
  note: string;
  hours: number;
  start_time: Date;
}

export interface TimeEntryStore {
  timeEntries: TimeEntry[];
  addTimeEntry: (timeEntry: Omit<TimeEntry, 'id'>) => void;
  updateTimeEntry: (
    timeEntry: Pick<TimeEntry, 'id'> & Partial<TimeEntry>
  ) => void;
  deleteTimeEntry: ({ id }: Pick<TimeEntry, 'id'>) => void;
}

export const timeEntryStore$ = observable<TimeEntryStore>({
  timeEntries: [],
  addTimeEntry: (timeEntry) => {
    timeEntryStore$.timeEntries.push({
      id: crypto.randomUUID(),
      ...timeEntry,
    });
  },
  updateTimeEntry: (timeEntry) => {
    const index = timeEntryStore$.timeEntries.findIndex(
      (a) => a.id.get() === timeEntry.id
    );
    if (index !== -1) {
      timeEntryStore$.timeEntries[index].assign(timeEntry);
    }
  },
  deleteTimeEntry: ({ id }) => {
    const index = timeEntryStore$.timeEntries.findIndex(
      (a) => a.id.get() === id
    );
    if (index !== -1) {
      timeEntryStore$.timeEntries.splice(index, 1);
    }
  },
});

syncObservable(timeEntryStore$, {
  persist: {
    name: 'timeEntryStore',
    plugin: ObservablePersistLocalStorage,
  },
});
