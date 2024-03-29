import { makeAutoObservable } from 'mobx';

enum EStatus {
    default,
    loading,
    success,
    failure
}

class AsyncStatus {
    constructor(private status: EStatus = EStatus.default) {
        makeAutoObservable(this);
    }

    public loading() {
        this.status = EStatus.loading;
    }

    public success() {
        this.status = EStatus.success;
    }

    public failure() {
        this.status = EStatus.failure;
    }

    public get() {
        return this.status;
    }

    public isLoading() {
        return this.status === EStatus.loading || this.status === EStatus.default;
    }
}

export const initAsyncStatuses = <T extends string>(...asyncStatuses: Array<T>): Record<T, AsyncStatus> =>
    asyncStatuses.reduce((result, asyncStatusKey) => {
        result[asyncStatusKey] = new AsyncStatus();

        return result;
    }, {} as Record<string, AsyncStatus>);
