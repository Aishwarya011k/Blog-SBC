import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' }
          ]} />
          <h1 className="text-5xl font-bold mb-4">About Smart Brain Creations</h1>
          <p className="text-xl text-purple-100">
            Pioneering Creative and Digital Education for School Students
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Company Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-4">
              Smart Brain Creations is an edtech startup based in Bangalore, Karnataka, dedicated to transforming education through creativity and technology. We believe that every student has unique potential waiting to be unlocked through innovative learning approaches.
            </p>
            <p className="text-gray-600 text-lg">
              Our mission is to make creative and digital education accessible to school students across India, empowering them with skills for the future while nurturing their creative thinking and problem-solving abilities.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg border border-primary">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Game Development</h3>
                <p className="text-gray-600">
                  Teaching game development to empower students with programming skills and creative expression through interactive projects.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-primary">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Skills</h3>
                <p className="text-gray-600">
                  Comprehensive programs covering coding, digital literacy, and technology fundamentals for modern learners.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-primary">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Learning</h3>
                <p className="text-gray-600">
                  Fostering creativity and innovation through hands-on, project-based learning that connects theory with practice.
                </p>
              </div>
            </div>
          </div>

          {/* Our Blog */}
          <div className="mb-12 bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">About This Blog</h2>
            <p className="text-purple-100 mb-6">
              This blog is a platform where we share insights, best practices, and innovations in education technology. We cover topics ranging from educational policy and creative learning methodologies to game development, technology trends, and their impact on modern education.
            </p>
            <p className="text-purple-100">
              Our articles are written by educators, technologists, and industry experts who are passionate about transforming education.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Smart Brain Creations?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600">Our team comprises experienced educators and technology professionals</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Innovation-Focused</h4>
                  <p className="text-gray-600">We stay ahead of educational trends and technology advancements</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Student-Centric</h4>
                  <p className="text-gray-600">Every program and article is designed with student success in mind</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">NEP 2020 Aligned</h4>
                  <p className="text-gray-600">Our approach aligns with the National Education Policy 2020 objectives</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Interested in learning more about our programs or collaborating with us?
            </p>
            <a
              href="https://smartbraincreations.com"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
