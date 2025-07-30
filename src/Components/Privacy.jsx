import React from 'react';

const Privacy = () => {
    return (
        <div className='pt-[80px] bg-gradient-to-b from-[#52D4FF] from-40% to-white to-90% min-h-screen'>
            <h1 className='text-center text-black font-bold text-2xl sm:text-3xl md:text-4xl underline'>
                Privacy Policy
            </h1>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 mt-6 sm:mt-10'>
                <section>
                    <h2 className='font-semibold text-xl sm:text-2xl mb-2'>
                        1. Location Data Usage:
                    </h2>
                    <p className='text-justify text-sm sm:text-base leading-relaxed'>
                        1. The app collects location data to provide accurate weather forecasts. Users should be informed whether the data is collected in real-time, stored, or shared.
                        <br />
                        2. Options should be provided to manually enter locations instead of enabling GPS tracking.
                    </p>
                </section>

                <section>
                    <h2 className='font-semibold text-xl sm:text-2xl mb-2'>
                        2. Privacy Policies and Terms of Service:
                    </h2>
                    <p className='text-justify text-sm sm:text-base leading-relaxed'>
                        1. Many users do not read the fine print, but privacy policies often disclose important details about data collection and sharing.
                        <br />
                        2. Checking for terms like "we may share your data with partners" is crucial.
                    </p>
                </section>

                <section>
                    <h2 className='font-semibold text-xl sm:text-2xl mb-2'>
                        3. IP Address Tracking:
                    </h2>
                    <p className='text-justify text-sm sm:text-base leading-relaxed'>
                        Even without GPS permissions, weather websites and apps can approximate your location using your IP address, which can still expose personal data.
                    </p>
                </section>

                <section>
                    <h2 className='font-semibold text-xl sm:text-2xl mb-2'>
                        4. Data Sharing with Third Parties:
                    </h2>
                    <p className='text-justify text-sm sm:text-base leading-relaxed'>
                        1. Some weather apps sell or share location and usage data with advertisers, data brokers, or government agencies.
                        <br />
                        2. Transparency in privacy policies is crucial to understanding how data is used.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
