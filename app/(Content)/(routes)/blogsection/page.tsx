"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from 'axios';

import { useState } from "react";
import { useRouter } from "next/navigation";

import { formSchema } from "./constants";

import { Heading } from "@/components/heading";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";



import { ChatCompletionRequestMessage } from "openai";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-modal";
import { Copy } from "lucide-react";


const BlogsectionPage = () => {
    const proModal = useProModal();
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });
    const isLoading = form.formState.isSubmitting;

    interface CustomError {
        response?: {
            status?: number;
        };
    }
    
    // Use the CustomError interface to annotate the error parameter in the catch block
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: 'user',
                content: `Act as a copywriter and write a script about ${values.prompt} including to create an educational and informative 1-minute video. Keep in mind that the video script will be read out loud and not shown on the screen. The script should follow the following format: - Hook - Describe the problem in more detail - Discuss the solution - Give more detail or examples of the solution. - Call to action The hook should start with one of the following lines, adapted to the topic: -The easiest way for you to... -Give me 30 seconds and l'lI show you how to... - Here are 4 ways that you can [achieve XI -This might just be the best advice on [niche] that I've ever heard... Total script should be a maximum of 120 words with extremely conversational tone and casual word choice.`,
            };

            const newMessages = [...messages, userMessage];

            const response = await axios.post("/api/blogsection", {
                messages: newMessages,
            });

            setMessages((current) => [...current, userMessage, response.data]);
            form.reset();

        } catch (error: any) { // Annotate the error parameter with CustomError type
            if (error?.response?.status === 403) {
                proModal.onOpen();
            }
        } finally {
            router.refresh();
        }
    };



    return (
        <main className="tt-main-wrapper bg-secondary-subtle" id="content">
        <section className="tt-section pt-4">
            <div className="container-fluid">
    
                <div className="row mb-4 g-3">
                    <div className="col-xl-7">
                        <div className="tt-template-field flex-grow-1">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row justify-content-between align-items-center g-2">
                                        <div className="col-auto flex-grow-1">
                                            <div className="tt-page-title mb-3 mb-lg-0">
                                                <h1 className="h5 mb-lg-1">Blog Section</h1>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center flex-column used-words-percentage">    
                                                <div className="progress mb-1 w-100" style={{height: 6}}>
                                                </div>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="col-xl-7 col-lg-10 col-12" style={{width:"100%"}}>
                                    <div className="card-body">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} >
                                            <input type="hidden" name="_token" value="X7Rs9zInVKgvGIaRcq6YdScr0CtvuGvwqrH1YvVZ"></input> 
                                            <input type="hidden" name="template_code" value="blog-section"></input>
                                            <input className="project_id" type="hidden" name="project_id" value=""></input>
    
                                            <div className="tt-template-heading mb-4 alert bg-soft-primary alert-primary">
                                                <p className="mb-0">Write a blog section with the key points of your article</p>
                                            </div>
    
    
                                            <div className="mb-4">
                                                <div className="d-flex flex-column">
                                                    <label htmlFor="language" className="form-label"><span className="fw-bold tt-promot-number fw-bold fs-4 me-2">1.</span>Select input &amp; output language<span className="text-danger ms-1">*</span></label>
                                                    <select id="language" className="w-100 form-control text-capitalize country-flag-select" data-toggle="select2" name="lang">
                                                        <option value="English" selected data-flag="https://www.writebots.org/public/backend/assets/img/flags/en.png?v=v1.7.0">
                                                            English
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
    
    
                                            <div className="mb-4">
                                                <label htmlFor="title" className="form-label"><span className="fw-bold tt-promot-number fw-bold fs-4 me-2">2.</span>Title of the blog
                                                    <span className="text-danger ms-1">*</span>
                                                </label>


                                            <FormField
                                                name="prompt"
                                                render = {({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input className="form-control" placeholder="e.g. best restaurants in LA to eat indian foods" required disabled={isLoading}  {...field}/>
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                            />
    
                                                
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="key_points" className="form-label"><span className="fw-bold tt-promot-number fw-bold fs-4 me-2">3.</span>What are the main points you want to cover?
                                                    <span className="text-danger ms-1">*</span>
                                                </label>
    
                                                <textarea className="form-control" name="key_points" id="key_points" placeholder="e.g. dosa, biriyani, tandoori chicken" required></textarea>
                                            </div>
    
                                            <div className="mb-4">
                                                <div className="d-flex flex-column">
                                                    <div className="d-flex align-items-center justify-content-between tt-advance-options cursor-pointer">
                                                        <label className="form-label cursor-pointer"><span className="fw-bold tt-promot-number fw-bold fs-4 me-2">4.</span>Advance Options<span className="ms-1 cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Browse more fields"><i data-feather="help-circle" className="icon-14"></i></span></label>
                                                        <span><i data-feather="arrow-down" className="icon-16 text-muted"></i></span>
                                                    </div>
    
                                                    <div className="card tt-advance-options">
                                                        <div className="card-body">
                                                            <div className="row g-3">
                                                                <div className="col-lg-6">
                                                                    <div className="form-input">
                                                                        <label htmlFor="creativity" className="form-label">Creative Label
                                                                            <span className="ms-1 cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Creativity level of the output will be as selected"><i data-feather="help-circle" className="icon-14"></i></span>
                                                                        </label>
                                                                        <select className="form-select select2" id="creativity" name="creativity" required>
                                                                            <option value="1" selected>
                                                                                High
                                                                            </option>
                                                                            <option value="0.5">
                                                                                Medium
                                                                            </option>
                                                                            <option value="0">
                                                                                Low
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
    
                                                                <div className="col-lg-6">
                                                                    <div className="form-input">
                                                                        <label htmlFor="tone" className="form-label">Choose a Tone
                                                                            <span className="ms-1 cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Choose the tone of the result text as you need"><i data-feather="help-circle" className="icon-14"></i></span>
                                                                        </label>
                                                                        <select className="form-select select2" id="tone" name="tone" required>
                                                                            <option value="Friendly">
                                                                                Friendly</option>
                                                                            <option value="Luxury" selected>
                                                                                Luxury
                                                                            </option>
                                                                            <option value="Relaxed">
                                                                                Relaxed
                                                                            </option>
                                                                            <option value="Professional">
                                                                                Professional</option>
                                                                            <option value="Casual">
                                                                                Casual
                                                                            </option>
                                                                            <option value="Excited">
                                                                                Excited
                                                                            </option>
                                                                            <option value="Bold">
                                                                                Bold
                                                                            </option>
                                                                            <option value="Masculine">
                                                                                Masculine</option>
                                                                            <option value="Dramatic">
                                                                                Dramatic</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
    
                                                                <div className="col-lg-6">
                                                                    <div className="form-input">
                                                                        <label htmlFor="num_of_results" className="form-label">Number of Results
                                                                            <span className="ms-1 cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Select how many variations of result you want"><i data-feather="help-circle" className="icon-14"></i></span>
                                                                        </label>
                                                                        <select className="form-select select2" id="num_of_results" name="num_of_results" required>
                                                                            <option value="1">
                                                                                1
                                                                            </option>
                                                                            <option value="2">
                                                                                2
                                                                            </option>
                                                                            <option value="3">
                                                                                3
                                                                            </option>
                                                                            <option value="4">
                                                                                4
                                                                            </option>
                                                                            <option value="5" selected>
                                                                                5
                                                                            </option>
                                                                        </select>
    
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-input">
                                                                        <label htmlFor="max_tokens" className="form-label">Max Results Length
                                                                            <span className="ms-1 cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Maximum words for each result"><i data-feather="help-circle" className="icon-14"></i></span>
                                                                        </label>
                                                                        <input className="form-control" type="number" id="max_tokens" name="max_tokens" value="" placeholder="Enter maximum word limit" max="999999998988"></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button disabled={isLoading} className="btn btn-primary btn-create-content">Create Content</Button>
                                        </form>
                                    </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-xl-5">
                        <div className="tt-generate-text">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card flex-column h-100">
                                            <input type="hidden" name="_token" value="X7Rs9zInVKgvGIaRcq6YdScr0CtvuGvwqrH1YvVZ"></input> 
                                            <input className="project_id" type="hidden" name="project_id" value=""></input>
    
                                            <div className="card-header">
                                                
                                            </div>
                                            <div className="card-body d-flex flex-column h-100 tt-create-content-wrap p-0">
                                                <textarea className="editor content-editor p-0 border-0" data-content-min-height="true" data-buttons='[["font", ["bold", "underline" , "italic" ]], ["fontname",["fontname"]], ["para", ["ul", "ol" , "paragraph" ]], ["style", ["style"]], ["fontsize", ["fontsize"]], ["insert", ["link"]], ["view", ["undo", "redo" ]]]' id="aiContents" name="contents">
                                                {messages.map((message, index) => (
                                                        <p key={index}>
                                                            {message.content}
                                                        </p>
                                                ))}
                                                </textarea>
    
                                                <div className="card-footer">
                                                    <div className="d-flex justify-content-end align-items-center g-2">
                                                        <div className="me-3">
                                                            <Button className="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy"><Copy/> Copy Contents</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default BlogsectionPage;