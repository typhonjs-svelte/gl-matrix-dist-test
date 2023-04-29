import dts from 'rollup-plugin-dts';

export default () =>
{
   return [{   // This bundle is for all exports except `src/modern`.
         input: '.types/index.d.ts',
         output: [{
            file: `./types/index.d.ts`,
            format: 'es',
            sourcemap: false
         }],
         plugins: [
            dts()
         ]
      },
      {   // This bundle is for the `src/modern` export.
         input: '.types/index-modern.d.ts',
         output: [{
            file: `./types/index-modern.d.ts`,
            format: 'es',
            sourcemap: false
         }],
         plugins: [
            dts()
         ]
      }
   ];
};
