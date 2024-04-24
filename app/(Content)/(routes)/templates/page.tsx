"use client";

import { MessageSquare } from "lucide-react";
import { Heading } from "@/components/heading";
import Sidebar from "@/components/sidebar";




const TemplatesPage = () => {
    return (
        <div>
            <main className="tt-main-wrapper bg-secondary-subtle" id="content">

                <header className="tt-top-fixed bg-light-subtle">
                <Heading 
                    title="Templates" 
                    description="Get Eyes on your contnet with our model" 
                    icon={MessageSquare} 
                    iconColor="text-violet-500" 
                    bgColor="bg-violet-500/10"
                />
                </header>
                <section className="tt-section pt-4">
                    <div className="container">
                        <div className="row mb-4">
                        
                        </div>


                        <div className="row mb-3 g-3">
                            <div className="col-xl-12">
                                <div className="card h-100 bg-secondary-subtle">
                                    <div className="card-header sticky-top-card bg-secondary py-lg-5 py-4">
                                    <div className="tab-content card-body" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="all-tab" role="tabpanel" aria-labelledby="tabId-all">
                                            <div className="row g-3">


                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="/blogsection" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/blog-section.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Blog Section</h3>
                                                                    <p className="mb-0">Write a blog section with the key points of your article
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">


                                                            <a href="https://www.writebots.org/dashboard/templates/blog-ideas" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/blog-ideas.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Blog Ideas</h3>
                                                                    <p className="mb-0">Generate blog ideas for your next post
                                                                    </p>
                                                                </div>

                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/blog-title" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/blog-title.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Blog Title</h3>
                                                                    <p className="mb-0">Generate blog title for your next post
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/testimonial-email" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/testimonial-email.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Testimonial Email</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/promotional-email" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/promotional-email.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Promotional Email</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/twitter-post" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/twitter-post.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Twitter Post</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/social-media-bio" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/social-media-bio.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Social Media Bio</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/facebook-ads" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/facebook-ads.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Facebook Ads</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/instagram-captions" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/instagram-captions.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Instagram Captions</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/youtube-video-title" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/youtube-video-title.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Youtube Video Title</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/youtube-video-description" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/youtube-video-description.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Youtube Video Description</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/content-rewriter" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/content-rewriter.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Content Rewriter</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">    
                                                            <a href="https://www.writebots.org/dashboard/templates/short-story" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/short-story.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Short Story</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/tiktok-video-script" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/tiktok-video-script.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">TikTok Video Script</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/video-ideas" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/video-ideas.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Video Ideas</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="tt-single-template d-flex flex-column h-100 position-relative">
                                                        <div className="card flex-column h-100 tt-template-card tt-corner-shape border-0 ">
                                                            <a href="https://www.writebots.org/dashboard/templates/home-page-seo-meta-description" className="card-body d-flex flex-column h-100">
                                                                <div className="tt-card-info mb-4">
                                                                    <div className="tt-template-icon mb-3">
                                                                        <img src="https://www.writebots.org/public/backend/assets/img/templates/home-page-seo-meta-description.png?v=v1.7.0" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <h3 className="h6">Home Page SEO Meta Description</h3>
                                                                    <p className="mb-0">
                                                                    </p>
                                                                </div>
                                                            </a>
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
        </div>
    )
}


export default TemplatesPage;
