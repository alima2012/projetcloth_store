"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// react  icons
import {
    FaGithub
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {useState} from "react";



export default function SignUp(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [pending, setPending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);

        const res = await fetch("/api/auth/singup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(form),
        });
    }
    return(
        <div className="h-full flex items-center justify-center bg-[#1b0918]">
            <Card className="md:h-auto w-[80%] sm:w-[420px] p-5 sm:p-10">
                <CardHeader>
                    <CardTitle className="text-center">
                        Sign up
                    </CardTitle>
                    <CardDescription className="text-sm text-center text-accent-foreground">
                        Use email or service, to create account
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-2 sm:px-6">
                    <form onSubmit={handleSubmit}  className="space-y-3">
                        <Input
                            type="text"
                            disabled={pending}
                            placeholder="Nom"
                            value={form.name}
                            onChange={(e) => setForm({...form, name: e.target.value})}
                            required
                        />
                         <Input
                            type="email"
                            disabled={pending}
                            placeholder="email"
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            required
                        />
                        <Input
                            type="password"
                            disabled={pending}
                            placeholder="password"
                            value={form.password}
                            onChange={(e) => setForm({...form, password: e.target.value})}
                            required
                        />
                        <Input
                            type="password"
                            disabled={pending}
                            placeholder="confirm password"
                            value={form.confirmPassword}
                            onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                            required
                        />
                        <Button
                            className="w-full"
                            size="lg"
                            disabled={pending}
                        >
                            Valider
                        </Button>
                    </form>
                    <Separator/>
                    <div className="flex my-2 justifyevenly mx-auto items-center">
                        <Button
                            disabled={false}
                            onClick={() => {}}
                            variant="outline"
                            size="lg"
                            className="bg-slate-300 hover:bg-slate-400 hover:scale-110">
                                <FcGoogle className="size-8 left-2.5 top-2.5"/>
                        </Button>
                    </div>
                    <p className="text-center text-sm mt-2 text-muted-foreground">
                        Vous avez déja un compte?
                        <Link className="text-sky-700 ml-4 hover:underline cursor-pointer" href="sign-in">Se connecter</Link>
                    </p>
                </CardContent>
            </Card> 
        </div>
    )
}