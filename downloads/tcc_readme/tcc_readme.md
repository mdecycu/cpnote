To link with Windows system DLLs, TCC uses import definition files (.def) instead of libraries.

The included 'tiny_impdef' program may be used to make additional 
.def files for any DLL. For example:

    tiny_impdef.exe opengl32.dll

Put opengl32.def into the tcc/lib directory.  Specify -lopengl32 at
the TCC commandline to link a program that uses opengl32.dll.