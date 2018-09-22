import { Container } from '@tinystate/core';
import { User } from '../core/models/user.model';

export interface UserState {
    user: User
}

export class UserContainer extends Container<UserState> {

    getInitialState(): UserState {
        return {
            user: undefined
        };
    }

    login(user: User) {
        this.setState(state => ({ user: user }));
    }

    logout() {
        this.setState(state => ({ user: undefined }));
    }
}
