export class Session {
    constructor(UserID?: string, SignInAt?: Date, SignOutAt?: Date) {
        this.userID = UserID;
        this.signInAt = SignInAt;
        this.signOutAt = SignOutAt;
    }

    public userID: string;
    public signInAt: Date;
    public signOutAt: Date;
}
