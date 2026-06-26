import { userSchema } from "@/schemas/userSchema";
import loginService from "@/services/loginService";
import React, { SetStateAction, useState } from "react";
import auth from "@/utils/auth";

function LoginForm({
    setIsAuth,
}: {
    setIsAuth: React.Dispatch<SetStateAction<boolean | null>>;
}) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmitForm = async (
        event: React.SubmitEvent<HTMLFormElement>,
    ) => {
        try {
            event.preventDefault();
            setError("");
            const result = userSchema.safeParse({ username, password });
            if (!result.success) {
                throw new Error("Username or password is not correct.");
            }
            const response = await loginService(result.data);
            auth.setToken(response.token);
            setIsAuth(true);
        } catch (error) {
            if (error instanceof Error) setError(error.message);
        }
    };
    return (
        <form
            onSubmit={handleSubmitForm}
            className="flex w-full flex-col gap-4 md:w-1/2"
        >
            <div className="flex flex-col gap-2">
                <label
                    className="font-semibold text-white"
                    htmlFor="userIdentifier"
                >
                    Username or Email
                </label>
                <input
                    className="w-full rounded-lg border border-gray-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    id="userIdentifier"
                    type="text"
                    name="userIdentifier"
                    placeholder="john_doe"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold text-white" htmlFor="password">
                    Password
                </label>
                <input
                    className="w-full rounded-lg border border-gray-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="secret1234"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <button
                type="submit"
                className="cursor-pointer rounded-lg bg-blue-600 p-3 text-white transition hover:bg-blue-700"
            >
                Login
            </button>
            {error && <p className="text-xs text-red-500">{error}</p>}
        </form>
    );
}

export default LoginForm;
