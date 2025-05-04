export interface TestimonialCard {
  photo: string;
  content: string;
  fullname: string;
}

export function getTestimonials(): TestimonialCard[] {
    return [
      { photo: 'testimonials-first.webp', fullname: 'testimonials.first.name', content: 'testimonials.first.content' },
      { photo: 'testimonials-second.jpg', fullname: 'testimonials.second.name', content: 'testimonials.second.content' },
      { photo: 'testimonials-third.jpg', fullname: 'testimonials.third.name', content: 'testimonials.third.content' }
    ];
}
