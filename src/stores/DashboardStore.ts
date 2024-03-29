import { makeAutoObservable, runInAction } from 'mobx';
import { getUsers } from '@/services/DashboardService';
import { IUser } from '@/interfaces/IUser';
import { initAsyncStatuses } from '@/stores/AsyncStore';

class DashboardStore {
    public users: IUser[] = [];
    private asyncStore = initAsyncStatuses('loadUsers');

    constructor() {
        makeAutoObservable(this)
    }

    public get isLoadingUsers() {
        return this.asyncStore.loadUsers.isLoading();
    }

    public async loadUsers() {
        try {
            this.asyncStore.loadUsers.loading();

            const users = await getUsers();
            runInAction(() => {
                this.users = users;
            });

            this.asyncStore.loadUsers.success();
        } catch (e) {
            this.asyncStore.loadUsers.failure();
        }
    }
}

export default new DashboardStore();
