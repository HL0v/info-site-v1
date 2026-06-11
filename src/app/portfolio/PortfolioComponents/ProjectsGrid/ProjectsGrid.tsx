'use client'

import React from 'react';
import { projects } from '../Data/projects';

const ProjectsGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.slug}
              className="group relative rounded-4xl bg-linear-to-br from-white/40 to-white/10 shadow-2xl p-1 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2"
            >
              <div className="rounded-[30px] h-full overflow-hidden bg-(--not-white)/50 backdrop-blur-3xl p-8 border border-white/40 flex flex-col">
                {/* Cover Image */}
                <div className="aspect-video bg-linear-to-tr from-(--royal-blue)/20 to-(--caitee-green)/20 rounded-2xl flex items-center justify-center border border-white/20 mb-8 overflow-hidden relative">
                  {project.cover ? (
                    <img 
                      src={project.cover} 
                      alt={`Capa do projeto ${project.title}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-50">
                      <svg className="w-16 h-16 text-(--royal-blue)/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-(--primary-text) mb-2 group-hover:text-(--royal-blue) transition-colors">
                        {project.title}
                      </h3>
                      <div className="inline-block px-3 py-1 rounded-full bg-(--caitee-green)/10 border border-(--caitee-green)/20 text-(--caitee-green) font-bold text-xs uppercase tracking-wider">
                        {project.category}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-(--secondary-text) bg-white/50 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-(--secondary-text) mb-6 flex-grow leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-(--primary-text) mb-3">Escopo do Projeto:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.scope.map((item, idx) => (
                        <span key={idx} className="text-xs font-medium text-(--primary-text) bg-white/60 px-3 py-1.5 rounded-lg border border-white/40">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;