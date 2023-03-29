import testimonials from '../../dataTestimonials';

export default function handler(req, res) {
  res.status(200).json(testimonials);
}
